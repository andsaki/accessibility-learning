import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionSummary, AccordionContent, AccordionBackLink } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionSummary id="accordion-summary-1">
          <h3 className="text-std-16N-170 desktop:text-std-18N-160">
            アコーディオンのタイトル
          </h3>
        </AccordionSummary>
        <AccordionContent>
          <p className="text-std-16N-170">
            ここにアコーディオンのコンテンツが表示されます。デフォルトの状態では閉じています。
          </p>
          <AccordionBackLink href="#accordion-summary-1">
            「アコーディオンのタイトル」の先頭に戻る
          </AccordionBackLink>
        </AccordionContent>
      </>
    ),
  },
};

export const Open: Story = {
  args: {
    open: true,
    children: (
      <>
        <AccordionSummary id="accordion-summary-2">
          <h3 className="text-std-16N-170 desktop:text-std-18N-160">
            開いた状態のアコーディオン
          </h3>
        </AccordionSummary>
        <AccordionContent>
          <p className="text-std-16N-170">
            このアコーディオンは最初から開いた状態で表示されます。
          </p>
          <AccordionBackLink href="#accordion-summary-2">
            「開いた状態のアコーディオン」の先頭に戻る
          </AccordionBackLink>
        </AccordionContent>
      </>
    ),
  },
};

export const MultipleAccordions: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Accordion>
        <AccordionSummary id="accordion-summary-3">
          <h3 className="text-std-16N-170 desktop:text-std-18N-160">
            よくある質問 1
          </h3>
        </AccordionSummary>
        <AccordionContent>
          <p className="text-std-16N-170">
            回答内容がここに表示されます。複数のアコーディオンを並べることができます。
          </p>
          <AccordionBackLink href="#accordion-summary-3">
            「よくある質問 1」の先頭に戻る
          </AccordionBackLink>
        </AccordionContent>
      </Accordion>

      <Accordion>
        <AccordionSummary id="accordion-summary-4">
          <h3 className="text-std-16N-170 desktop:text-std-18N-160">
            よくある質問 2
          </h3>
        </AccordionSummary>
        <AccordionContent>
          <p className="text-std-16N-170">
            別の質問への回答がここに表示されます。
          </p>
          <AccordionBackLink href="#accordion-summary-4">
            「よくある質問 2」の先頭に戻る
          </AccordionBackLink>
        </AccordionContent>
      </Accordion>

      <Accordion>
        <AccordionSummary id="accordion-summary-5">
          <h3 className="text-std-16N-170 desktop:text-std-18N-160">
            よくある質問 3
          </h3>
        </AccordionSummary>
        <AccordionContent>
          <p className="text-std-16N-170">
            さらに別の質問への回答がここに表示されます。
          </p>
          <AccordionBackLink href="#accordion-summary-5">
            「よくある質問 3」の先頭に戻る
          </AccordionBackLink>
        </AccordionContent>
      </Accordion>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Accordion>
      <AccordionSummary id="accordion-summary-6">
        <h3 className="text-std-16N-170 desktop:text-std-18N-160">
          長いコンテンツの例
        </h3>
      </AccordionSummary>
      <AccordionContent>
        <div className="flex flex-col gap-4 text-std-16N-170">
          <p>
            これは長いコンテンツの例です。アコーディオンは長いテキストやリストを含むことができます。
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>リストアイテム 1</li>
            <li>リストアイテム 2</li>
            <li>リストアイテム 3</li>
            <li>リストアイテム 4</li>
            <li>リストアイテム 5</li>
          </ul>
          <p>
            コンテンツが長い場合、「先頭に戻る」リンクが便利です。
            ユーザーはクリックするだけでアコーディオンのタイトルまでスクロールできます。
          </p>
          <AccordionBackLink href="#accordion-summary-6">
            「長いコンテンツの例」の先頭に戻る
          </AccordionBackLink>
        </div>
      </AccordionContent>
    </Accordion>
  ),
};
