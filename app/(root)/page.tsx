const publications = [
  {
    _id: "1",
    title: "What is DeSci",
    tags: [
      { _id: "1", name: "DeSci" },
      { _id: "2", name: "Blockchain" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "DeSci vs Blockchain",
    tags: [
      { _id: "1", name: "DeSci" },
      { _id: "2", name: "Blockchain" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredPublications = publications.filter((publication) =>
    publication.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredPublications.map((publication) => (
          <h1 key={publication._id}>{publication.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
