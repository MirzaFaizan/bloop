/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { Link, NavLink, MainLink } from 'components/link';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <MainLink path="/" sx={styles.logo} {...props} >
      <Text>
🐶 fit bloop 🐱
      </Text>
    </MainLink>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
