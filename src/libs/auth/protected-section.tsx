import { useAuth } from './use-auth-hook';

export interface ProtectedSectionProps {
  children: JSX.Element;
}

const ProtectedSection = (props: ProtectedSectionProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{props.children}</> : null
}

export default ProtectedSection;