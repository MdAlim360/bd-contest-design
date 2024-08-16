const ImportantLinks = () => (
  <section className="py-8 px-4 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a
            href="http://president.gov.bd"
            className="text-blue-600 hover:underline"
          >
            Office of the President
          </a>
        </li>
        <li>
          <a
            href="http://cabinet.gov.bd"
            className="text-blue-600 hover:underline"
          >
            Cabinet Division
          </a>
        </li>
        <li>
          <a
            href="http://mopa.gov.bd"
            className="text-blue-600 hover:underline"
          >
            Ministry of Public Administration
          </a>
        </li>
        <li>
          <a
            href="http://nidw.gov.bd"
            className="text-blue-600 hover:underline"
          >
            National Information Directory
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default ImportantLinks;
