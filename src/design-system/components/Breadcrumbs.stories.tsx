import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from './Breadcrumbs';

const meta = {
  title: 'Design System/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'ナビゲーションのラベル',
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/category">カテゴリ</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};

export const TwoLevels: Story = {
  args: {
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};

export const DeepHierarchy: Story = {
  args: {
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">商品一覧</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics">電化製品</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics/computers">コンピューター</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>ノートパソコン</BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};

export const LongPageTitle: Story = {
  args: {
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/services">サービス一覧</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>
          これは非常に長いページタイトルの例です。モバイルデバイスでの表示やアクセシビリティを考慮する必要があります。
        </BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'ナビゲーション',
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">トップ</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/about">会社概要</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>沿革</BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};
