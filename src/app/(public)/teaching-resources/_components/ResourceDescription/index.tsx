import React from 'react'
import style from './style.module.css'
import Container from '@/components/ui/container'
import HtmlRender from '@/components/ui/htmlRender';

const dummyString = `
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget laoreet risus. Fusce at nulla felis. Nulla facilisi. Cras sollicitudin ipsum et ipsum egestas tincidunt. Maecenas vel blandit tortor, at pharetra mauris. Aliquam feugiat magna quis purus suscipit porttitor. Cras a sodales lorem. Vestibulum aliquet luctus purus vel porta. Fusce ante dolor, pharetra at luctus sed, convallis non tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam erat nulla, tempus vel pulvinar vel, commodo et dui. Donec non posuere diam. Praesent id mi euismod, finibus velit at, aliquet turpis.
  </p>
  <p>
    Etiam ac accumsan velit, a suscipit dolor. Donec porta consectetur ullamcorper. Donec condimentum sagittis nisi id condimentum. Aliquam mollis molestie felis, fermentum dignissim enim gravida ac. Nam porttitor mattis urna quis commodo. Nullam a finibus sapien. Suspendisse laoreet, leo sit amet accumsan sodales, sapien purus convallis turpis, in rutrum purus leo vitae ipsum. Integer ut est aliquet tellus porta sodales. Donec fringilla tortor nulla, et rhoncus quam ullamcorper nec. Aenean blandit lorem diam, eget aliquam erat tempor et. Suspendisse pulvinar nec massa non porttitor. Aenean malesuada massa eget massa efficitur, at tincidunt sem viverra.
  </p>
  <ul>
    <li>Curabitur malesuada ipsum in magna pellentesque</li>
    <li>Nullam egestas neque sit amet ipsum aliquet, eget interdum libero rutrum.</li>
    <li>In aliquet ligula eu sem egestas suscipit. Fusce vitae pulvinar nunc, non accumsan massa</li>
  </ul>
`;


const ResourceDescription = () => {
  return (
    <div className={style.resDes}>
      <Container>
        <div className={style.sectionContent}>
          <h3>Description</h3>
          <HtmlRender htmlString={dummyString} />
        </div>
      </Container>
    </div>
  )
}

export default ResourceDescription