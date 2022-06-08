import { EditorView } from 'prosemirror-view';
import React from 'react';

import {
  act,
  configure,
  pasteToTextEditor,
  render,
  screen,
  userEvent,
  waitFor,
} from '../../../../utils/testUtils';
import TextEditor, { TextEditorProps } from '../TextEditor';

configure({ defaultHidden: true });

const label = 'Text editor label';

const defaultProps: TextEditorProps = {
  id: 'text-editor-1',
  label,
  onBlur: jest.fn(),
  onChange: jest.fn(),
  value: '',
};

const Wrapper: React.FC<TextEditorProps> = (props) => {
  const { onChange, value, ...rest } = props;

  const [val, setVal] = React.useState(value);

  const handleChange = (v: string) => {
    onChange(v);
    setVal(v);
  };

  return <TextEditor {...rest} value={val} onChange={handleChange} />;
};

const renderComponent = (props?: Partial<TextEditorProps>) =>
  render(<Wrapper {...defaultProps} {...props}></Wrapper>);

test('should call onChange', async () => {
  jest.spyOn(EditorView.prototype, 'coordsAtPos').mockImplementation(() => ({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }));

  const onChange = jest.fn();

  const user = userEvent.setup();
  await renderComponent({ onChange });

  const editor = screen.getByRole('textbox', { name: label });
  pasteToTextEditor(editor, 'test');
  await waitFor(() => expect(onChange).toHaveBeenLastCalledWith('<p>test</p>'));

  const undoButton = screen.getByTitle(/peruuta/i);
  await act(async () => await user.click(undoButton));
  await waitFor(() => expect(onChange).toHaveBeenLastCalledWith('<p>test</p>'));
});
