import parse, { HTMLElement } from 'node-html-parser';
import {
  TranslationResponse,
  TranslationResponseExample,
  TranslationResponseExampleItem,
  TranslationResponseMain,
  TranslationResponseTranslatedItem,
  TranslationTranslatedItemMain,
} from '../../types/models/translation/translation.types';
import { decodeHTMLEntities } from './decodeHTMLEntities';

export const translationHtmlStringToResponse = (html: string, url: string): TranslationResponse => {
  // remove "·" from html string to parse more easily
  html = html.split("<span class='sep'>&middot;</span>").join('');

  const root = parse(html);

  // Begin exact

  const main_response: TranslationResponseMain[] = [];

  const title = root.querySelector('title')?.innerText.split(' - ')[0] || '';

  const sourceLang =
    root.querySelector('div#data')?.getAttribute('data-sourcelang')?.toLowerCase() || '';
  const targetLang =
    root.querySelector('div#data')?.getAttribute('data-targetlang')?.toLowerCase() || '';

  const exact = root.querySelector('.exact');

  const exact_lemma_items = (exact as HTMLElement).querySelectorAll('.lemma');

  for (const exact_lemma_item of exact_lemma_items) {
    const main_item_element = exact_lemma_item.querySelector('h2');
    const main_item_text = main_item_element?.querySelector('a.dictLink')?.innerText;
    const main_item_url = main_item_element?.querySelector('a.dictLink')?.getAttribute('href');
    const main_item_context = main_item_element?.querySelector(
      '.tag_lemma_context .placeholder'
    )?.innerText;
    const main_item_wordtype = main_item_element?.querySelector('.tag_wordtype')?.innerText;

    const translation_lines = exact_lemma_item.querySelector('.translation_lines');
    const translation = translation_lines?.querySelectorAll('.translation');

    const translatedItems: TranslationResponseTranslatedItem[] = [];
    const less_common_translations: TranslationTranslatedItemMain[] = [];

    if (translation) {
      for (const translation_line of translation) {
        let main_translation: TranslationTranslatedItemMain | undefined;

        const example_translations = [];

        const main_translation_element = translation_line.querySelector('h3.translation_desc');
        if (main_translation_element) {
          const main_translation_text =
            main_translation_element?.querySelector('a.dictLink')?.innerText;
          const main_translation_url = main_translation_element
            ?.querySelector('a.dictLink')
            ?.getAttribute('href');
          const main_translation_type =
            main_translation_element?.querySelector('.tag_type')?.innerText;

          main_translation = {
            text: decodeHTMLEntities(main_translation_text),
            url: main_translation_url && decodeURI(main_translation_url),
            type: decodeHTMLEntities(main_translation_type),
          };
        } else {
          const less_common_translation_element =
            translation_line.querySelector('div.translation_desc');
          const less_common_translation_text =
            less_common_translation_element?.querySelector('a.dictLink')?.innerText;
          const less_common_translation_url = less_common_translation_element
            ?.querySelector('a.dictLink')
            ?.getAttribute('href');
          const less_common_translation_type =
            less_common_translation_element?.querySelector('.tag_type')?.innerText;

          less_common_translations.push({
            text: decodeHTMLEntities(less_common_translation_text),
            url: less_common_translation_url && decodeURI(less_common_translation_url),
            type: decodeHTMLEntities(less_common_translation_type),
          });
        }

        const example_lines = translation_line.querySelector('.example_lines');

        if (example_lines) {
          const example_line_list = example_lines?.querySelectorAll(
            '.example.line'
          ) as HTMLElement[];

          for (const example_line of example_line_list) {
            const example_line_original = example_line.querySelector('span.tag_s')?.innerText;
            const example_line_translation = example_line.querySelector('span.tag_t')?.innerText;

            example_translations.push({
              original: decodeHTMLEntities(example_line_original),
              translation: decodeHTMLEntities(example_line_translation),
            });
          }
        }
        translatedItems.push({
          main: main_translation && (main_translation as TranslationTranslatedItemMain),
          examples: example_translations,
        });
      }
    }
    main_response.push({
      mainItem: {
        text: decodeHTMLEntities(main_item_text),
        url: decodeHTMLEntities(main_item_url),
        wordtype: decodeHTMLEntities(main_item_wordtype),
        context: main_item_context && decodeHTMLEntities(main_item_context),
      },
      translatedItems,
      lessCommon: less_common_translations,
    });
  }

  // End exact

  // Begin inexact (examples)

  const examples_response: TranslationResponseExample[] = [];

  const inexact = root.querySelector('.inexact');

  if (inexact) {
    const inexact_lemma_items = (inexact as HTMLElement).querySelectorAll('.lemma.singleline');

    for (const inexact_lemma_item of inexact_lemma_items) {
      let example_main_item: Partial<TranslationResponseExampleItem> = {};
      const example_transaltions: TranslationResponseExampleItem[] = [];

      const example_main_item_element = inexact_lemma_item.querySelector('h2');
      const example_main_item_text =
        example_main_item_element?.querySelector('a.dictLink')?.innerText;
      const example_main_item_url = example_main_item_element
        ?.querySelector('a.dictLink')
        ?.getAttribute('href');
      const example_main_item_type =
        example_main_item_element?.querySelector('.tag_type')?.innerText;

      example_main_item = {
        text: decodeHTMLEntities(example_main_item_text),
        url: decodeHTMLEntities(example_main_item_url),
        type: decodeHTMLEntities(example_main_item_type),
      };

      const translation_lines = inexact_lemma_item.querySelector('.translation_lines');
      const translation = translation_lines?.querySelectorAll('.translation');

      if (translation) {
        for (const translation_line of translation) {
          const example_main_translation_element =
            translation_line.querySelector('div.translation_desc');

          if (example_main_translation_element) {
            const example_main_translation_text =
              example_main_translation_element?.querySelector('a.dictLink')?.innerText;
            const example_main_translation_url = example_main_translation_element
              ?.querySelector('a.dictLink')
              ?.getAttribute('href');
            const example_main_translation_wordtype =
              example_main_translation_element?.querySelector('.tag_type')?.innerText;

            example_transaltions.push({
              text: decodeHTMLEntities(example_main_translation_text),
              url: decodeHTMLEntities(example_main_translation_url),
              type: decodeHTMLEntities(example_main_translation_wordtype),
            });
          }
        }
      }
      examples_response.push({
        main: example_main_item as TranslationResponseExampleItem,
        translations: example_transaltions,
      });
    }
  }

  // End inexact

  const response: TranslationResponse = {
    title,
    url,
    language: {
      source: sourceLang,
      target: targetLang,
    },
    main: main_response,
    examples: examples_response,
  };

  return response;
};
