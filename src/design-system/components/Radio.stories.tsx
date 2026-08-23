import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radio";
import { useState } from "react";

/**
 * アクセシブルなラジオボタンコンポーネント
 *
 * WCAG 2.1 AA準拠のラジオボタンです。
 * キーボード操作（矢印キー）、スクリーンリーダー対応、エラー表示を備えています。
 */
const meta = {
  title: "Design System/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "ラベルテキスト",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態",
    },
    error: {
      control: "text",
      description: "エラーメッセージ",
    },
    helpText: {
      control: "text",
      description: "ヘルプテキスト",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本的なラジオグループ
 */
const DefaultComponent = () => {
  const [selected, setSelected] = useState("option1");
  return (
    <RadioGroup label="お好きな色を選択してください">
      <Radio
        label="赤"
        name="color"
        value="option1"
        checked={selected === "option1"}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        label="青"
        name="color"
        value="option2"
        checked={selected === "option2"}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        label="緑"
        name="color"
        value="option3"
        checked={selected === "option3"}
        onChange={(e) => setSelected(e.target.value)}
      />
    </RadioGroup>
  );
};

export const Default: Story = {
  args: {
    label: "",
  },
  render: () => <DefaultComponent />,
};

/**
 * ヘルプテキスト付き
 */
const WithHelpTextComponent = () => {
  const [selected, setSelected] = useState("standard");
  return (
    <RadioGroup
      label="配送方法を選択してください"
      helpText="配送料金は配送方法によって異なります"
    >
      <Radio
        label="通常配送（3-5営業日）"
        name="shipping"
        value="standard"
        helpText="送料無料"
        checked={selected === "standard"}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        label="速達配送（1-2営業日）"
        name="shipping"
        value="express"
        helpText="送料 500円"
        checked={selected === "express"}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        label="当日配送"
        name="shipping"
        value="same-day"
        helpText="送料 1,000円"
        checked={selected === "same-day"}
        onChange={(e) => setSelected(e.target.value)}
      />
    </RadioGroup>
  );
};

export const WithHelpText: Story = {
  args: {
    label: "",
  },
  render: () => <WithHelpTextComponent />,
};

/**
 * エラー状態
 */
const WithErrorComponent = () => {
  const [selected, setSelected] = useState("");
  return (
    <RadioGroup
      label="支払い方法を選択してください"
      error={!selected ? "支払い方法の選択が必要です" : undefined}
    >
      <Radio
        label="クレジットカード"
        name="payment"
        value="credit"
        checked={selected === "credit"}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        label="銀行振込"
        name="payment"
        value="bank"
        checked={selected === "bank"}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        label="コンビニ払い"
        name="payment"
        value="convenience"
        checked={selected === "convenience"}
        onChange={(e) => setSelected(e.target.value)}
      />
    </RadioGroup>
  );
};

export const WithError: Story = {
  args: {
    label: "",
  },
  render: () => <WithErrorComponent />,
};

/**
 * 無効化状態
 */
export const Disabled: Story = {
  args: {
    label: "",
  },
  render: () => (
    <RadioGroup label="サービスプラン">
      <Radio
        label="無料プラン"
        name="plan"
        value="free"
        checked={true}
      />
      <Radio
        label="ベーシックプラン"
        name="plan"
        value="basic"
        disabled={true}
        helpText="現在利用できません"
      />
      <Radio
        label="プレミアムプラン"
        name="plan"
        value="premium"
        disabled={true}
        helpText="現在利用できません"
      />
    </RadioGroup>
  ),
};

/**
 * 横並びレイアウト
 */
const HorizontalLayoutComponent = () => {
  const [selected, setSelected] = useState("yes");
  return (
    <fieldset style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "1rem" }}>
      <legend style={{ fontSize: "1rem", fontWeight: 600, padding: "0 0.5rem" }}>
        ニュースレターを購読しますか？
      </legend>
      <div style={{ display: "flex", gap: "2rem", marginTop: "0.5rem" }}>
        <Radio
          label="はい"
          name="newsletter"
          value="yes"
          checked={selected === "yes"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          label="いいえ"
          name="newsletter"
          value="no"
          checked={selected === "no"}
          onChange={(e) => setSelected(e.target.value)}
        />
      </div>
    </fieldset>
  );
};

export const HorizontalLayout: Story = {
  args: {
    label: "",
  },
  render: () => <HorizontalLayoutComponent />,
};

/**
 * キーボード操作
 *
 * Tab/Shift+Tabでフォーカス移動、矢印キーで選択変更ができます。
 */
const KeyboardInteractionComponent = () => {
  const [selected, setSelected] = useState("option1");
  return (
    <div>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#eff6ff",
          borderRadius: "8px",
          marginBottom: "1.5rem",
          border: "2px solid #3b82f6",
        }}
      >
        <h3 style={{ marginTop: 0, fontSize: "16px", fontWeight: "bold" }}>
          💡 操作方法
        </h3>
        <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "14px", lineHeight: "1.8" }}>
          <li><strong>Tab</strong>: グループ間のフォーカス移動</li>
          <li><strong>↑/↓ または ←/→</strong>: グループ内で選択を変更</li>
          <li><strong>Space</strong>: 選択</li>
          <li><strong>マウスクリック</strong>: フォーカススタイルは表示されない</li>
        </ul>
      </div>

      <RadioGroup label="お好きなフルーツを選択してください">
        <Radio
          label="りんご"
          name="fruit"
          value="option1"
          checked={selected === "option1"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          label="バナナ"
          name="fruit"
          value="option2"
          checked={selected === "option2"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          label="オレンジ"
          name="fruit"
          value="option3"
          checked={selected === "option3"}
          onChange={(e) => setSelected(e.target.value)}
        />
      </RadioGroup>
    </div>
  );
};

export const KeyboardInteraction: Story = {
  args: {
    label: "",
  },
  render: () => <KeyboardInteractionComponent />,
};

/**
 * 複数のラジオグループ
 */
const MultipleGroupsComponent = () => {
  const [size, setSize] = useState("medium");
  const [color, setColor] = useState("blue");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <RadioGroup label="サイズを選択してください">
        <Radio
          label="小 (S)"
          name="size"
          value="small"
          checked={size === "small"}
          onChange={(e) => setSize(e.target.value)}
        />
        <Radio
          label="中 (M)"
          name="size"
          value="medium"
          checked={size === "medium"}
          onChange={(e) => setSize(e.target.value)}
        />
        <Radio
          label="大 (L)"
          name="size"
          value="large"
          checked={size === "large"}
          onChange={(e) => setSize(e.target.value)}
        />
      </RadioGroup>

      <RadioGroup label="色を選択してください">
        <Radio
          label="青"
          name="color"
          value="blue"
          checked={color === "blue"}
          onChange={(e) => setColor(e.target.value)}
        />
        <Radio
          label="赤"
          name="color"
          value="red"
          checked={color === "red"}
          onChange={(e) => setColor(e.target.value)}
        />
        <Radio
          label="緑"
          name="color"
          value="green"
          checked={color === "green"}
          onChange={(e) => setColor(e.target.value)}
        />
      </RadioGroup>
    </div>
  );
};

export const MultipleGroups: Story = {
  args: {
    label: "",
  },
  render: () => <MultipleGroupsComponent />,
};

/**
 * WCAGレベル比較
 *
 * AA/AAAの2つのアクセシビリティレベルのフォーカス表示の違いを確認できます。
 * Tabキーでフォーカスを移動して確認してください。
 */
const WCAGLevelsComponent = () => {
  const [selectedAA, setSelectedAA] = useState("option1");
  const [selectedAAA, setSelectedAAA] = useState("option1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#fefce8",
          borderRadius: "8px",
          marginBottom: "1rem",
          border: "1px solid #facc15",
        }}
      >
        <h3 style={{ marginTop: 0, fontSize: "16px", fontWeight: "bold" }}>
          ⚠️ 動作確認方法
        </h3>
        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
          Tabキーまたは矢印キーでフォーカスを移動すると、各WCAGレベルのフォーカス表示の違いを確認できます。
          マウスクリックではフォーカススタイルは表示されません。
        </p>
      </div>

      <div>
        <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: "bold" }}>
          レベルAA（推奨）⭐
        </h3>
        <p style={{ marginBottom: "1rem", fontSize: "12px", color: "#6b7280" }}>
          背景色 + 太めのアウトライン
        </p>
        <RadioGroup label="お好きなフルーツは？">
          <Radio
            label="りんご"
            name="fruit-aa"
            value="option1"
            wcagLevel="AA"
            checked={selectedAA === "option1"}
            onChange={(e) => setSelectedAA(e.target.value)}
          />
          <Radio
            label="バナナ"
            name="fruit-aa"
            value="option2"
            wcagLevel="AA"
            checked={selectedAA === "option2"}
            onChange={(e) => setSelectedAA(e.target.value)}
          />
        </RadioGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: "bold" }}>
          レベルAAA（最高）
        </h3>
        <p style={{ marginBottom: "1rem", fontSize: "12px", color: "#6b7280" }}>
          黄色背景 + 黒の太いアウトライン（最も目立つ）
        </p>
        <RadioGroup label="お好きなフルーツは？">
          <Radio
            label="りんご"
            name="fruit-aaa"
            value="option1"
            wcagLevel="AAA"
            checked={selectedAAA === "option1"}
            onChange={(e) => setSelectedAAA(e.target.value)}
          />
          <Radio
            label="バナナ"
            name="fruit-aaa"
            value="option2"
            wcagLevel="AAA"
            checked={selectedAAA === "option2"}
            onChange={(e) => setSelectedAAA(e.target.value)}
          />
        </RadioGroup>
      </div>
    </div>
  );
};

export const WCAGLevels: Story = {
  args: {
    label: "",
  },
  render: () => <WCAGLevelsComponent />,
};
