import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/volumes">Go to all volumes</Link>
    </div>
  );
}

// import Link from "next/link";
// import { introduction } from "../resources/lib/data";
// // import { useRouter } from "next/router";
// import { volumes } from "../resources/lib/data";

// export default function HomePage() {
//   // const router = useRouter();
//   return (
//     <div>
//       <h1>Lord of the Rings</h1>
//       {/* <Link href="/Volumes">GO to VOlumes.</Link> * juts put this in the index.js in volume folder/  } */}
//       <p>{introduction}</p>

//       {/* <h2>All Volumes</h2> */}
//       <ul>
//         {volumes.map((volume) => (
//           <li key={volume.slug}>
//             <Link href={`/Volumes/${volume.slug}`}>{volume.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
