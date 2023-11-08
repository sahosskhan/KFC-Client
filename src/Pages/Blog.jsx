import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <div><Helmet>
    <title>KFC | Blog</title>
  </Helmet>
            <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Mostofa D. Taj</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is One way data binding?</a>
			<p className="mt-2">One-way data binding is a data binding method that data flows from a model to a view. This means that view can only be updated when  model changes & model cannot be updated by changes made to view. One-way data binding is commonly used in UI development, web development, DBMS etc</p>
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
			<p className="mt-2">NPM = Node Package Manager. NPM is the default package manager for Node.js. its help to install or uninstall any package for project and manage the server running and localhost deploy.  </p>
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
			<p className="mt-2">MongoDB is a NoSQL database & MySQL is a relational database. 
			<br/>
			MongoDB uses a query language that is designed to work with JSON & MySQL uses SQL, which is a powerful language for querying structured data in a tabular format. 
			<br/>
			MongoDB is generally considered to be eventually consistent by default & MySQL, especially when using the InnoDB storage engine.
			<br/> 
			MongoDB is often chosen for applications where flexibility, scalability, and handling of unstructured or semi-structured data is important & MySQL is well-suited for applications that require structured data, complex transactions, and strong consistency.  </p>

		</div>
	</div>
</div>
        </div>
    );
};

export default Blog;