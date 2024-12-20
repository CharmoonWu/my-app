import { loginReg } from "service/authService";

export default async function ServerPage() {
  let data: any = await loginReg.getTitle({ lang: "zh_CN" });

  console.log(data);

  return (
    <ul>
      {data.map((post: any) => (
        <li key={post?.id}>{post?.name}</li>
      ))}
    </ul>
  );
}
