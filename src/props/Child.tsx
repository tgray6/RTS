interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>
}