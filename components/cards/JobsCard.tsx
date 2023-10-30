import Image from "next/image";
import Link from "next/link";

// interface JobProps {
//   id: string;
//   title: string;
//   author: {
//     _id: string;
//     name: string;
//     picture: string;
//   };
//   time: string;
//   salary: string;
//   description: string;
//   location: {
//     city: string;
//     flag: string;
//   };
//   jobLink: string;
// }

// const JobsCard = ({
//   id,
//   title,
//   author,
//   time,
//   salary,
//   description,
//   location,
//   jobLink,
// }: JobProps) => {

const JobsCard = ({ ip }: any) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex w-full flex-row gap-8">
        <div className="background-light800_dark400 relative flex h-16 w-16 items-center justify-center rounded-xl">
          <Link href="/">
            <Image
              src="/assets/icons/account.svg"
              width={40}
              height={40}
              alt="profile image"
            />
          </Link>
        </div>
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-row justify-between">
              <Link href={`/`}>
                <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
                  Your ip: {ip}
                </h3>
              </Link>
              <div className="background-light800_dark400 flex items-center justify-end gap-2 rounded-2xl px-3 py-1.5">
                <Image
                  src="/assets/icons/account.svg"
                  width={20}
                  height={20}
                  alt="profile image"
                />
                <p>Location</p>
              </div>
            </div>
            <div className="body-regular text-dark500_light700  mt-2 line-clamp-2">
              Description
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row gap-3">
              <div className="flex flex-row items-center justify-center gap-1">
                {" "}
                <Image
                  src="/assets/icons/clock-2.svg"
                  width={20}
                  height={20}
                  alt="profile image"
                />
                <p className="body-medium text-light-500">FULL TIME</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                {" "}
                <Image
                  src="/assets/icons/currency-dollar-circle.svg"
                  width={20}
                  height={20}
                  alt="profile image"
                />
                <p className="body-medium text-light-500">SALARY</p>
              </div>
            </div>

            <Link
              className="flex flex-row items-center justify-center gap-2"
              href="/"
            >
              <p className="body-semibold primary-text-gradient">View job</p>
              <Image
                src="/assets/icons/arrow-up-right.svg"
                width={20}
                height={20}
                alt="profile image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
