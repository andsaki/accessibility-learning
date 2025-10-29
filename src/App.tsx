import { useState } from 'react'
import { Button, Input } from './design-system/components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // Input用のstate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCount((count) => count + 1)
      setIsLoading(false)
    }, 1000)
  }

  // Input用のバリデーション
  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '' }

    if (!formData.name) {
      newErrors.name = 'お名前を入力してください'
    }

    if (!formData.email) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }

    if (!formData.password) {
      newErrors.password = 'パスワードを入力してください'
    } else if (formData.password.length < 8) {
      newErrors.password = 'パスワードは8文字以上で入力してください'
    }

    setErrors(newErrors)
    return !newErrors.name && !newErrors.email && !newErrors.password
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      alert('フォーム送信成功！')
    }
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

        <section style={{ marginBottom: '3rem', marginTop: '3rem' }}>
          <h2>Input コンポーネント</h2>
          <p>ラベル、エラー表示、ヘルプテキストを備えたアクセシブルな入力フィールドです。</p>

          <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
            <Input
              label="お名前"
              placeholder="山田太郎"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
              required
            />

            <Input
              label="メールアドレス"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              helperText="ログイン時に使用します"
              required
            />

            <Input
              label="パスワード"
              type="password"
              placeholder="8文字以上で入力"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              helperText="8文字以上の英数字を入力してください"
              required
            />

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Button type="submit" variant="primary">
                送信
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setFormData({ name: '', email: '', password: '' })
                  setErrors({ name: '', email: '', password: '' })
                }}
              >
                クリア
              </Button>
            </div>
          </form>

          <div style={{ marginTop: '2rem' }}>
            <h3>サイズバリエーション</h3>
            <Input label="小サイズ" size="sm" placeholder="小さい入力欄" />
            <Input label="中サイズ" size="md" placeholder="標準の入力欄" />
            <Input label="大サイズ" size="lg" placeholder="大きい入力欄" />
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>無効化状態</h3>
            <Input
              label="無効な入力欄"
              value="編集できません"
              disabled
              helperText="この項目は編集できません"
            />
          </div>
        </section>

        <section style={{
          marginTop: '3rem',
          padding: '1.5rem',
          backgroundColor: '#e3f2fd',
          border: '2px solid #2196f3',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#1565c0', marginTop: 0 }}>アクセシビリティ機能</h3>
          <ul style={{ lineHeight: '1.8', color: '#1565c0' }}>
            <li>✅ キーボード操作対応（Tab、Enter、Space）</li>
            <li>✅ フォーカスインジケーター表示</li>
            <li>✅ スクリーンリーダー対応（ARIA属性）</li>
            <li>✅ ラベルとフィールドの適切な関連付け</li>
            <li>✅ エラーの即座な通知（role="alert"）</li>
            <li>✅ 必須項目の明示</li>
            <li>✅ WCAG AA準拠のカラーコントラスト</li>
            <li>✅ 適切なセマンティックHTML</li>
          </ul>

        </section>
      </main>
    </div>
  )
}

export default App
