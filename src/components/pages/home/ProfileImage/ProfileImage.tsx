import NextImage from "next/image";

export function ProfileImage() {
  return (
    <div className="w-3/4 md:w-1/2 lg:w-full  mx-auto">
      <NextImage
        alt="Welcome to EddySims.com"
        src="/images/pfp.png"
        width={464}
        height={610}
        className="mx-auto"
      />
    </div>
  );
}
