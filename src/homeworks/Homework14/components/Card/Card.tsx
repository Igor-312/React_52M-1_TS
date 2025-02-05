
import { CardContainer, Name } from './styles'
import Message from '../Message/Messge';
import { useContext } from 'react';
import { MessageContext } from '../BlogManagment/BlogManagement';


function Card() {
const postMessage = useContext(MessageContext)

    return (
        <CardContainer isShowResult={!!postMessage}>
            <Name>John Johnson: </Name>
            <Message />
        </CardContainer>)
}
export default Card;