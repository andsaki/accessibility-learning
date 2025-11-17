import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { primitive } from '../tokens/colors';
import { ThemeProvider } from '../theme';
import { useState } from 'react';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOptions = [
  { value: 'apple', label: 'りんご' },
  { value: 'banana', label: 'バナナ' },
  { value: 'orange', label: 'オレンジ' },
  { value: 'grape', label: 'ぶどう' },
  { value: 'melon', label: 'メロン' },
  { value: 'strawberry', label: 'いちご' },
];

export const Default: Story = {
  args: {
    label: '好きな果物',
    options: mockOptions,
    placeholder: '選択してください',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: '好きな果物',
    options: mockOptions,
    value: 'banana',
  },
};

export const WithError: Story = {
  args: {
    label: '好きな果物',
    options: mockOptions,
    error: '果物を選択してください',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: '好きな果物',
    options: mockOptions,
    helperText: '一番好きな果物を選んでください',
  },
};

export const Disabled: Story = {
  args: {
    label: '好きな果物',
    options: mockOptions,
    value: 'apple',
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: '好きな果物',
    options: [
      { value: 'apple', label: 'りんご' },
      { value: 'banana', label: 'バナナ（売り切れ）', disabled: true },
      { value: 'orange', label: 'オレンジ' },
      { value: 'grape', label: 'ぶどう（売り切れ）', disabled: true },
      { value: 'melon', label: 'メロン' },
    ],
  },
};

export const WCAGLevels = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Dropdown
          label="レベルA（デフォルト）"
          options={mockOptions}
          value={value1}
          onChange={setValue1}
          wcagLevel="A"
        />
        <Dropdown
          label="レベルAA"
          options={mockOptions}
          value={value2}
          onChange={setValue2}
          wcagLevel="AA"
        />
        <Dropdown
          label="レベルAAA"
          options={mockOptions}
          value={value3}
          onChange={setValue3}
          wcagLevel="AAA"
        />
      </div>
    );
  },
};

export const Interactive = {
  render: () => {
    const [selectedFruit, setSelectedFruit] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const cities = [
      { value: 'tokyo', label: '東京' },
      { value: 'osaka', label: '大阪' },
      { value: 'nagoya', label: '名古屋' },
      { value: 'fukuoka', label: '福岡' },
      { value: 'sapporo', label: '札幌' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Dropdown
          label="好きな果物"
          options={mockOptions}
          value={selectedFruit}
          onChange={setSelectedFruit}
          placeholder="果物を選択"
          required
        />

        <Dropdown
          label="住んでいる都市"
          options={cities}
          value={selectedCity}
          onChange={setSelectedCity}
          placeholder="都市を選択"
          helperText="現在住んでいる都市を選んでください"
        />

        <div style={{
          padding: '16px',
          backgroundColor: primitive.gray[100],
          borderRadius: '8px',
          fontSize: '14px',
        }}>
          <p><strong>選択された値:</strong></p>
          <p>果物: {selectedFruit || 'なし'}</p>
          <p>都市: {selectedCity || 'なし'}</p>
        </div>
      </div>
    );
  },
};
