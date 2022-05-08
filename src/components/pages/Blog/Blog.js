import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Blog = () => {
  return (
    <section class="dark:bg-coolGray-800 dark:text-coolGray-100">
      <PageTitle title="Blog"></PageTitle>
      <div class="container mx-auto flex flex-col p-6">
        <h2 class="py-4 text-3xl font-bold text-center">The Questions</h2>
        <div class="divide-y divide-coolGray-700">
          <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div class="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                class="w-16 h-16"
              >
                <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                Question 1 -{" "}
              </span>
              <span class="text-xl font-bold md:text-2xl">
                Difference Between Javascript and Node.js
              </span>
              <span class="mt-4 dark:text-coolGray-300">
                Javascript is a lightweight ,cross-platform , interpreted
                programming language. On the other hand Node.js is a server side
                scripting language based on the Google Chrome V8 engine.
                Javascript is a programming language it could be run in any
                browser that support Javascript engine. Node js is a running
                enivroment or interpreter for the Javascript Programming
                Language. JavaScript can run on any engine, including Firefox's
                Spider Monkey, Safari's JavaScript Core, and V8 [Google Chrome].
                Node.js only supports the V8 engine, which is exclusive to
                Google Chrome. JS designed to build network-centric
                applications. NodeJs designed for data-intensive real-time
                applications that run on several platforms.
              </span>
            </div>
          </div>
          <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div class="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                class="w-16 h-16"
              >
                <path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
                <path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                Question 2 -
              </span>
              <span class="text-xl font-bold md:text-2xl">
                When should you use nodejs and when should you use mongodb?
              </span>
              <span class="mt-4 dark:text-coolGray-300">
                <h4 className="mt-3 font-black font-bold"> When Node JS </h4>
                When making system which put emphasis on concurrency and speed.
                Sockets only servers like chat apps, irc apps, etc. Social
                networks which put emphasis on realtime resources like
                geolocation, video stream, audio stream, etc. Handling small
                chunks of data really fast like an analytics webapp. As exposing
                a REST only api.
                <h4 className="mt-3 font-black font-bold">When mongodb</h4>
                when to use mongodb Schema-less design Scalability in managing
                Tera bytes of data Rapid replicaSet with high availability
                feature Sharding enables linear and scale out growth w/o running
                out of budget Support high write load Use of Data locality for
                query processing MongoDB meets Consistency and Partitioning
                requirements in CAP theory ( Consistency, Availability and
                Partitioning)
              </span>
            </div>
          </div>
          <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div class="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                class="w-16 h-16"
              >
                <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
                <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                Step 3 -
              </span>
              <span class="text-xl font-bold md:text-2xl">
                Differences Between SQL and No-SQL Database.
              </span>
              <span class="mt-4 dark:bg-coolGray-800 dark:text-coolGray-300">
                SQL databases follow ACID properties (Atomicity, Consistency,
                Isolation and Durability) whereas the NoSQL database follows the
                Brewers CAP theorem (Consistency, Availability and Partition
                tolerance). <br />
                SQL databases are table-based on the other hand NoSQL databases
                are either key-value pairs, document-based, graph databases or
                wide-column stores. <br />
                These databases are best suited for complex queries These
                databases are not so good for complex queries. <br />
                Example of SQL :Oracle, MySQL, Microsoft SQL Server, and
                PostgreSQL Example of No-SQL: MongoDB and CouchDB, Key-value:
                Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph:
                Neo4j and Amazon Neptune
              </span>
            </div>
          </div>
          <div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div class="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                class="w-16 h-16"
              >
                <polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
                <polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
                <polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
              </svg>
            </div>
            <div class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span class="text-xs tracking-wider uppercase dark:text-violet-400">
                Step 4 - Aperiam
              </span>
              <span class="text-xl font-bold md:text-2xl">
                What is the purpose of JWT?
              </span>
              <span class="mt-4 dark:text-coolGray-300">
                What is a JWT? : JSON Web Token is an open industry standard
                used to share information between two entities, usually a client
                (like your app’s frontend) and a server (your app’s backend).
                The purpose: <br />
                If the auth server sends it as a plain JSON, the client
                application’s APIs would have no way to verify that the content
                they are receiving is correct. A malicious attacker could, for
                example, change the user ID (sub claim in the above example
                JSON), and the application’s APIs would have no way to know that
                that has happened.
                <br />
                Due to this security issue, the auth server needs to transmit
                this information in a way that can be verified by the client
                application, and this is where the concept of a “token” comes
                into the picture.
                <br />
                To put it simply, a token is a string that contains some
                information that can be verified securely. It could be a random
                set of alphanumeric characters which point to an ID in the
                database, or it could be an encoded JSON that can be
                self-verified by the client (known as JWTs).
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
