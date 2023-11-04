

const Blog = () => {
    return (
        <div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Mostofa D. Taj</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is One way data binding?</a>
			<p className="mt-2">One-way data binding is a concept commonly used in web development and user interface frameworks to describe how data is synchronized between the applications data model and the user interface elements. In one-way data binding, data flows in one direction, typically from the data model to the UI, and any changes in the data model are reflected in the UI automatically.</p>
		</div>
	</div>
</div>



<div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2023</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Sahoss Khan</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is NPM in node.js?</a>
			<p className="mt-2">NPM stands for Node Package Manager, and it is the default package manager for Node.js. NPM is a command-line tool and an online registry of JavaScript packages and libraries that are open-source and available for use in Node.js applications. NPM simplifies the process of managing, installing, and sharing JavaScript code, making it an essential tool for Node.js developers.</p>
		</div>
	</div>
</div>



<div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2021</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Sangram Khan</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Different between Mongodb database vs mySQL database.</a>
			<p className="mt-2">
<div className="bg-red-100 p-10 text-lg rounded-xl">
<b>Data Model:</b>
<li>MongoDB is a NoSQL database, which means it uses a flexible, schema-less data model. Data is stored in JSON-like documents, which can have different structures within the same collection. This allows for easy scaling and handling of unstructured or semi-structured data.</li>
<li>MySQL is a relational database, which uses a structured, tabular data model with fixed schemas. Data is organized into tables with predefined columns and data types. This structure is suitable for data that fits well into tables with rows and columns.</li>
</div>
<div className="bg-red-100 p-10 text-lg rounded-xl mt-5">
<b>Query Language:</b>

<li>MongoDB uses a query language that is designed to work with JSON-like documents. It supports rich queries, including nested documents and arrays.</li>
<li>MySQL uses SQL (Structured Query Language), which is a powerful language for querying structured data in a tabular format.
</li>
</div>

<div className="bg-red-100 p-10 text-lg rounded-xl mt-5">
<b>Scaling:</b>
<li>MongoDB is designed to scale horizontally, which means you can add more servers or nodes to handle increased data and traffic. This makes it well-suited for large-scale applications and big data scenarios.</li>
<li>MySQL can also scale horizontally to some extent, but it is typically associated with vertical scaling, where you add more resources (CPU, RAM) to a single server. Horizontal scaling in MySQL usually involves more complex configurations like sharding.
ACID </li>
</div>

<div className="bg-red-100 p-10 text-lg rounded-xl mt-5">
<b>Compliance:</b>
<li>MongoDB is generally considered to be eventually consistent by default. It offers strong consistency, but you can choose to configure it to be more flexible if needed.</li>
<li>MySQL, especially when using the InnoDB storage engine, is known for its strong ACID (Atomicity, Consistency, Isolation, Durability) compliance, which is essential for applications that require strict data consistency and transaction support.</li>
</div>

<div className="bg-red-100 p-10 text-lg rounded-xl mt-5">
<b>Use Cases:</b>

<li>MongoDB is often chosen for applications where flexibility, scalability, and handling of unstructured or semi-structured data is important. It is commonly used in web and mobile applications, content management systems, and analytics platforms.</li>
<li>MySQL is well-suited for applications that require structured data, complex transactions, and strong consistency. It is widely used in traditional relational database scenarios, such as e-commerce, finance, and accounting systems.</li>
</div>
</p>
		</div>
	</div>
</div>
        </div>
    );
};

export default Blog;