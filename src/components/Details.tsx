interface Props {
  summary: JSX.Element
  children?: JSX.Element
}

export default function Details({ summary, children }: Props): JSX.Element {
  return (
    <details>
      <summary>{summary}</summary>

      {children}
    </details>
  );
}
