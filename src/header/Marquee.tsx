import { AllProductType } from "@/type";
import { FaCaretUp, FaSortDown } from "react-icons/fa";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 300 } },
  );
  const data: AllProductType[] = await res.json();

  let convertBanglaNum = (num: number) => {
    let x = num
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
    return x;
  };

  let moreData = [...data, ...data,...data,...data,...data]
  return (
    <div className=" border-y border-gray-300 ">
      <MarqueeText pauseOnHover direction="right" duration={12}>
        {moreData.map((item) => (
          <div className="px-4 py-2 text-sm flex gap-1.5" key={item.id}>
            <span>{item?.image}</span>
            <span>{item?.nameBn}</span>
            <span className="text-gray-500">
              {convertBanglaNum(item.today)} টাকা/
              {item?.unit === "dozen"
                ? "ডজন"
                : item?.unit === "kg"
                  ? "কেজি"
                  : item?.unit === "litre"
                    ? "লিটার"
                    : item?.unit === "piece"
                      ? "পিছ"
                      : ""}
            </span>
            <span>
              {item.change.dir === "up" ? (
                <span className="flex  text-red-600 gap-1">
                  <FaCaretUp className="mt-0.75" />
                  {convertBanglaNum(Math.abs(item.change.pct))}%
                </span>
              ) : item.change.dir === "down" ? (
                <span className="flex gap-1 text-green-700">
                  <FaSortDown />
                  {convertBanglaNum(Math.abs(item.change.pct))}%
                </span>
              ) : (
                <span className="text-yellow-500">
                  {" "}
                  {Math.abs(item.change.pct)}%
                </span>
              )}
            </span>
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
