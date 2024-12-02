import { Property } from 'csstype'

interface Props {
  justifyContent: Property.JustifyContent | undefined
  children: JSX.Element
}
  
export default function Flex({ justifyContent, children }: Props): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justifyContent
      }}
    >
      {children}
    </div>
  );
}
  