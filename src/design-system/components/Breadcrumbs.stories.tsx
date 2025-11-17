import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from './Breadcrumbs';
import { primitive } from '../tokens/colors';

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
    children: {
      control: false,
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

export const WCAGLevels: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{
        padding: '1.5rem',
        backgroundColor: primitive.gray[50],
        borderRadius: '0.5rem',
        border: '2px solid primitive.gray[300]'
      }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem', fontWeight: 'bold', color: primitive.gray[800] }}>
          WCAG Level A
        </h3>
        <p style={{ marginBottom: '1rem', color: primitive.gray[500], fontSize: '0.875rem' }}>
          基本的なアクセシビリティ要件を満たします<br />
          リンク色: <code style={{ backgroundColor: primitive.blue[50], padding: '0.125rem 0.25rem', borderRadius: '0.25rem' }}>primitive.blue[500]</code> (コントラスト比 3.46:1)
        </p>
        <Breadcrumbs wcagLevel="A">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">商品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrent>カテゴリ</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumbs>
      </div>

      <div style={{
        padding: '1.5rem',
        backgroundColor: primitive.gray[50],
        borderRadius: '0.5rem',
        border: '2px solid primitive.blue[700]'
      }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem', fontWeight: 'bold', color: primitive.gray[800] }}>
          WCAG Level AA (デフォルト)
        </h3>
        <p style={{ marginBottom: '1rem', color: primitive.gray[500], fontSize: '0.875rem' }}>
          推奨されるアクセシビリティレベル（Web標準）<br />
          リンク色: <code style={{ backgroundColor: primitive.blue[50], padding: '0.125rem 0.25rem', borderRadius: '0.25rem' }}>primitive.blue[800]</code> (コントラスト比 7.67:1)
        </p>
        <Breadcrumbs wcagLevel="AA">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">商品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrent>カテゴリ</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumbs>
      </div>

      <div style={{
        padding: '1.5rem',
        backgroundColor: primitive.gray[50],
        borderRadius: '0.5rem',
        border: '2px solid primitive.blue[900]'
      }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem', fontWeight: 'bold', color: primitive.gray[800] }}>
          WCAG Level AAA
        </h3>
        <p style={{ marginBottom: '1rem', color: primitive.gray[500], fontSize: '0.875rem' }}>
          最高レベルのアクセシビリティ（視覚障害への最大配慮）<br />
          リンク色: <code style={{ backgroundColor: primitive.blue[50], padding: '0.125rem 0.25rem', borderRadius: '0.25rem' }}>primitive.blue[800]</code> (コントラスト比 10.07:1)
        </p>
        <Breadcrumbs wcagLevel="AAA">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">商品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrent>カテゴリ</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumbs>
      </div>
    </div>
  ),
};
