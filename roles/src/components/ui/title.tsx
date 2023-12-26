interface TitleProps {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return <h1 className="text-4xl font-extrabold opacity-85">{title}</h1>
}
