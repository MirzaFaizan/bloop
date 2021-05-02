/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 1,
    icon: icon4,
    title: 'Location',
    description: `Track your pet’s location in real time.
    Set a geofence and get alerts as soon as your pet escapes.
    Movement updates every 10 seconds.
    `,
  },
  {
    id: 2,
    icon: icon5,
    title: 'Health',
    description: `Get timely alerts about allergies, rashes or infections.
    Get early signs of diabetes or kidney disease.
    Get alerts about discomfort, pain or dietary disease.
    Get alerts about insomnia and sleep disruption.
    `,
  },
  {
    id: 3,
    icon: icon6,
    title: 'Fitness',
    description: `Achieve recommended exercise goals for your specific pet.
    See distance travelled, minutes active and more.
    Serve correct food portions recommended for your specific dog.
    Celebrate Achievements
    .`,
  },
  {
    id: 4,
    icon: icon7,
    title: 'Play Dates',
    description: `Find the nearest dog parks to your pet’s location.
    Swipe and choose playdates for your pet.
    `,
  },
  
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section} id="features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Why your pet will love bloop"
          description="awesome stuff to keep track of your pet"
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
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(2, 1fr)',
    ],
  },
};
