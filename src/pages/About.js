import React from 'react';

import classes from './About.module.css';

function About() {
  return (
    <div>
      <section className={classes.about}>
        <img src="https://www.simplyrecipes.com/thmb/1Ciscbtv8F3_hGkbf9Y1Aw36zsc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRAbout-a515fb4bc8724313ae51fa1d483572c6.png"></img>
        <div className={classes.section_heading}>
          <h1>
            About <span>EaTic</span>
          </h1>
        </div>
        <div className={classes.para}>
          <h2 className={classes.para_heading}>Who We Are</h2>
          <p>
            EaTic is here to help you cook delicious meals with less stress and
            more joy. We offer recipes and cooking advice for home cooks, by
            home cooks. Helping create “kitchen wins” is what we’re all about.
            <br></br>
            <br></br>
            EaTic was founded in 2021 by Nimish dubey as a home cooking blog to
            record his favorite family recipes. Today, EaTic has grown into a
            trusted resource for home cooks with more than 3,000 tested recipes,
            guides, and meal plans, drawing over 15 million readers each month
            from around the world. We’re supported by a diverse group of recipe
            developers, food writers, recipe and product testers, photographers,
            and other creative professionals.
          </p>
          <h2 className={classes.para_heading}>Recipe Development & Testing</h2>
          <p>
            Our recipes primarily use fresh, unprocessed ingredients but we also
            believe there is a time and a place for canned, frozen, and other
            prepared ingredients. We believe in a diet that includes a wide
            variety of foods: real butter and cream, extra virgin olive oil,
            eggs, lots of fruits and vegetables, and protein from meat, fish,
            beans, and cheese. Plus cake for dessert.<br></br>
            <br></br>There are three things we think about when deciding if a
            recipe is good enough to go on EaTic:<br></br>
            <br></br>
            <span>First, does it work? </span>Recipes need to be easy to follow
            and provide reliable results, every time.<br></br>
            <br></br>
            <span>Second, is it delicious? </span>Does the dish make us smile
            inside and out? Do we want to eat the whole batch by ourselves?{' '}
            <br></br>
            <br></br>
            <span>Third, is it worth the effort? </span>Do we want to make it
            again (and again and again)?<br></br>
            <br></br>To make sure each of these standards is met, we start by
            working with expert recipe developers — people with the experience
            and knowledge to not only develop a good recipe in their own
            kitchens, but to make sure that recipe works in yours Finally, each
            new recipe is run by our team of recipe testers working in home
            kitchens with the same pots, pans, and tools that you use in yours.
            Only after all this is the recipe shared on EaTic.
          </p>
          <h2 className={classes.para_heading}>Diversity & Inclusion</h2>
          <p>
            Everyone is welcome at the EaTic's table: people of all races,
            religions, genders, sexual orientations, ages, backgrounds, and
            abilities. We strive to be a resource for every home cook, and we
            consciously work to make this inclusion felt in every part of the
            site, from the individuals we hire to the recipes we share.
          </p>
          <h2 className={classes.para_heading}>Comments</h2>
          <p>
            We review and approve every comment left on the site, and generally
            respond to questions within 1 to 3 days. When leaving comments, we
            ask that you think of Simply Recipes as our home. Constructive
            feedback is always welcome, but rude, mean, disrespectful, or spammy
            comments are not welcome and will not be approved.<br></br>
            <br></br>
            <h4>Write us on:</h4>
            teameatic@gmail.com
          </p>
        </div>
      </section>
      <div className="footer"></div>
    </div>
  );
}

export default About;
