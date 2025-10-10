import React from 'react';
import {
  Breadcrumbs,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
} from './Breadcrumbs';

const BreadcrumbsExample: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Breadcrumbs（パンくずリスト）</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">基本的な使い方</h2>
        <Breadcrumbs>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/category">カテゴリ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumbs>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2階層</h2>
        <Breadcrumbs>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumbs>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">深い階層</h2>
        <Breadcrumbs>
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
              <BreadcrumbLink href="/products/electronics/computers">
                コンピューター
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrent>ノートパソコン</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumbs>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">アクセシビリティのポイント</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code>&lt;nav aria-label="パンくずリスト"&gt;</code>
            で他のナビゲーションと区別
          </li>
          <li>
            <code>&lt;ol&gt;</code>（順序付きリスト）で階層構造を表現
          </li>
          <li>
            現在のページには<code>aria-current="page"</code>を設定
          </li>
          <li>
            装飾的なSVGアイコンには<code>aria-hidden="true"</code>を設定
          </li>
          <li>現在のページはリンクではなくテキストとして表示</li>
        </ul>
      </section>
    </div>
  );
};

export default BreadcrumbsExample;
