
export function About() {
  return (
    <section className="py-8 px-8 lg:py-10">
      <div className="container mx-auto grid items-center lg:grid-cols-2">
        <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
          <div className="mb-4 !font-semibold">
            About Menrva Books
          </div>
          <div
            className="mb-6 pr-5 text-4xl !leading-snug lg:text-5xl text-eggplant dark:text-rose/70"
          >
            The Castle Looks Different at Night...
          </div>
          <div className="mb-12">
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he
            wouldn&apos;t scroll to get here. Add a button if you want the user
            to see more. We are here to make life better.
            <br />
            <br />
            And now I look and look around and there&apos;s so many Kanyes
            I&apos;ve been trying to figure out the bed design for the master
            bedroom at our Hidden Hills compound... and thank you for turning my
            personal jean jacket into a couture piece.
          </div>
          <div className="mb-6">
            Rest of the Story:
          </div>
          <div className="">
            Thank you Anna for the invite thank you to the whole Vogue team And
            I love you like Kanye loves Kanye Pand Pand Panda I&apos;ve been
            trying to figure out the bed design for the master bedroom at our
            Hidden Hills compound...The Pablo pop up was almost a pop up of
            influence. All respect prayers and love to Phife•s family Thank you
            for so much inspiration daytime I love this new Ferg album! The Life
            of Pablo is now available for purchase I have a dream. Thank you to
            everybody who made The Life of Pablo the number 1 album in the
            world! I&apos;m so proud of the nr #1 song in the country. Panda!
          </div>
        </div>
        <img
          src={`https://www.material-tailwind.com/img/content1.jpg`}
          alt="team work"
          className="h-full min-h-[50vh] w-full rounded-xl object-cover object-center md:min-h-[75vh]"
        />
      </div>
    </section>
  );
}

export default About;