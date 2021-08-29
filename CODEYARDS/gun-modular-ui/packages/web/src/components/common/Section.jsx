import React from 'react';
import {
  Box, Headline,
} from 'elemental-react';

const SectionTitle = props => (
  <Headline.H5 name="SectionTitle" mb={3} bold {...props} />
);

const Section = ({ p, pt, pb, children, ...props }) => (
  <Box
    as="section"
    p={p || [16, 40, 0]}
    pt={pt || 40}
    pb={pb || 40}
    {...props}
  >
    <Box
      width="100%"
      maxWidth={1024}
      alignSelf="center"
    >
      {children}
    </Box>
  </Box>
);

Section.Title = SectionTitle;

export default Section;
