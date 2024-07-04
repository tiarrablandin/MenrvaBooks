export function About() {
  return (
    <section className="py-8 px-8 lg:py-10">
      <div className="container mx-auto grid items-center lg:grid-cols-2">
        <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
          <div className="mb-4 !font-semibold">About Menrva Books</div>
          <div className="mb-6 pr-5 text-4xl !leading-snug lg:text-5xl text-eggplant dark:text-rose/70">
            For readers and authors, by readers and authors
          </div>
          <div className="mb-12">
            Editor, avid reader, and coder Tiarra had an idea one day that evolved into what is now
            known as Menrva Books. Always engaging with tech and books in new and interesting ways
            is something that everyone in the book space has loved ever since the printing press was
            invented, and Tiarra wanted to not just make it better but easier to use, intuitive and
            ultimatly a place where readers want to use everyday for their reading and writing needs.
            <br />
            <br />
            Fiercely independent, Tiarra had a clear vision of what she wanted Menrva Books to
            become and set out to build a small team and lead them to create this site and all of
            its wonderful features, with much, much more to come. We plan on making this a site that
            has everything readers and authors need or want in one place.
            <br />
            <br />
            A place for readers to connect with other readers about books they love, discovering new
            favorites along the way. Having focused on the Indie publishing world for years, we
            wanted to give authors access to new audiences and readers outside of the conventional
            website discovery and connect readers to worlds and stories they might never get to
            experience.
            <br />
            <br />
            Boasting a unique search algorithm designed to make finding books not only easy but make
            sense. Instead of spending hours, sometimes days sluething the internet, we're instead
            making it a one stop shop for all things books. Finally we don't take any money that will
            prioritize one book or other over another. Everyone gets a fair chance, that way the
            searches are organic, and our search function stays clean and intuitive for everyone,
            period.
            <br />
            <br />
            We want you to discover new stories and enjoy what this passion project has to offer.
            It's easy when you're creating something you love to get myopic about the things we're
            creating; we want to avoid that as much as possible. We're always open to feedback so
            please let us know any way we can make Menrva Books a better place for both readers and
            authors alike.
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
