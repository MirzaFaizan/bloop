/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Attach device with collar',
    description: `Device can be attached to any regular collar following 3 easy steps. It can stay mounted or be detached at any time you want.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Download the application and set up your pet profile',
    description: `Upload your pet’s photo, fill the profile page (age, breed and weight) of your pet to get the best experience.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Connect Device with mobile application',
    description: `Enter your device ID and Password in a mobile application to get connected with your pet’s collar.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="process" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="3 easy steps to get connected 🌎"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
