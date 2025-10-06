import { useState } from 'react'
import { Button } from './design-system/components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCount((count) => count + 1)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header>
        <h1>デザインシステム & アクセシビリティ学習</h1>
        <p>アクセシブルなコンポーネントの実装例</p>
      </header>

      <main style={{ marginTop: '2rem' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2>Button コンポーネント</h2>
          <p>WCAG準拠のアクセシブルなボタンコンポーネントです。</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <Button variant="primary" onClick={handleClick} isLoading={isLoading}>
              カウント: {count}
            </Button>

            <Button variant="secondary" onClick={() => alert('クリックされました！')}>
              セカンダリ
            </Button>

            <Button variant="outline" onClick={() => alert('アウトライン')}>
              アウトライン
            </Button>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <Button size="sm" variant="primary">小サイズ</Button>
            <Button size="md" variant="primary">中サイズ</Button>
            <Button size="lg" variant="primary">大サイズ</Button>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button disabled>無効化</Button>
            <Button isLoading>読み込み中</Button>
            <Button icon="🚀">アイコン付き</Button>
          </div>
        </section>

        <section style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3>アクセシビリティ機能</h3>
          <ul style={{ lineHeight: '1.8' }}>
            <li>✅ キーボード操作対応（Tab、Enter、Space）</li>
            <li>✅ フォーカスインジケーター表示</li>
            <li>✅ スクリーンリーダー対応（ARIA属性）</li>
            <li>✅ WCAG AA準拠のカラーコントラスト</li>
            <li>✅ 適切なセマンティックHTML</li>
            <li>✅ 状態の視覚的フィードバック</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
