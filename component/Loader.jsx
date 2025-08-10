import Image from "next/image";

export default function Loader() {
  return (
    <div id="loading">
      <div id="loading-center">
        <div>
          <div>
            <div></div>
            <div>
              <Image
                src="/images/fav-icon.png"
                alt="Loading Icon"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
