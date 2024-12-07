interface Props {
  src: string
  srcType?: string
  fallbackMessage?: string
}

export default function Video({
  src,
  srcType = 'video/mp4',
  controls = true,
  controlsList = 'nodownload',
  style = {
    width: '100%',
    marginBottom: 'var(--ifm-leading)'
  },
  fallbackMessage = 'Your browser does not support HTML5 video.',
  ...props
}: Props & React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>) {
  return (
    <video style={style} controls={controls} controlsList={controlsList} {...props}>
      <source src={src} type={srcType} />
      {fallbackMessage}
    </video>
  )
}
