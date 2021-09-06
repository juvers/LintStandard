import styled from 'styled-components';

interface IInnerProps {
  align: string;
}

interface IRichTextProps extends IInnerProps {
  markup: string;
}

const Inner = styled.div<IInnerProps>`
  text-align: ${(props) => props.align};
`;

const RichText = ({
  align,
  markup = '',
  ...rest
}: IRichTextProps): JSX.Element => {
  return (
    <Inner align={align} dangerouslySetInnerHTML={{__html: markup}} {...rest} />
  );
};

export default RichText;
