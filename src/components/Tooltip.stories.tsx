import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'これはツールチップです',
    children: <span style={{ textDecoration: 'underline dotted', cursor: 'help' }}>ホバーしてください</span>,
  },
};

export const Top: Story = {
  args: {
    content: '上に表示されます',
    position: 'top',
    children: <button style={{ padding: '8px 16px', cursor: 'pointer' }}>上</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: '下に表示されます',
    position: 'bottom',
    children: <button style={{ padding: '8px 16px', cursor: 'pointer' }}>下</button>,
  },
};

export const Left: Story = {
  args: {
    content: '左に表示されます',
    position: 'left',
    children: <button style={{ padding: '8px 16px', cursor: 'pointer' }}>左</button>,
  },
};

export const Right: Story = {
  args: {
    content: '右に表示されます',
    position: 'right',
    children: <button style={{ padding: '8px 16px', cursor: 'pointer' }}>右</button>,
  },
};

export const WithDelay: Story = {
  args: {
    content: '500ms後に表示されます',
    delay: 500,
    children: <span style={{ textDecoration: 'underline dotted', cursor: 'help' }}>遅延表示</span>,
  },
};

export const NoDelay: Story = {
  args: {
    content: 'すぐに表示されます',
    delay: 0,
    children: <span style={{ textDecoration: 'underline dotted', cursor: 'help' }}>即座に表示</span>,
  },
};

export const LongText: Story = {
  args: {
    content: 'これは長いツールチップのテキストです。複数の情報を含めることができます。',
    children: <span style={{ textDecoration: 'underline dotted', cursor: 'help' }}>長いテキスト</span>,
  },
};

export const AllPositions: Story = {
  args: {
    content: '',
    children: null,
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '100px', flexWrap: 'wrap' }}>
      <Tooltip content="上に表示" position="top">
        <button style={{ padding: '8px 16px' }}>上</button>
      </Tooltip>
      <Tooltip content="下に表示" position="bottom">
        <button style={{ padding: '8px 16px' }}>下</button>
      </Tooltip>
      <Tooltip content="左に表示" position="left">
        <button style={{ padding: '8px 16px' }}>左</button>
      </Tooltip>
      <Tooltip content="右に表示" position="right">
        <button style={{ padding: '8px 16px' }}>右</button>
      </Tooltip>
    </div>
  ),
};
