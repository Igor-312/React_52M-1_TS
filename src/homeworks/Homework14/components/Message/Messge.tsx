import { useContext } from 'react'

import { MessageContainer, MessageComponent } from './styles';
import { MessageContext } from '../BlogManagment/BlogManagement';
import Button from 'components/Button/Button';

function Message() {
  const message = useContext(MessageContext);

  const onDeleteMessage = () => {}

  return (
    <MessageComponent>
      <MessageContainer>{message}</MessageContainer>
      <Button name='Delete' onClick={onDeleteMessage} />
    </MessageComponent>
  );
}

export default Message;
