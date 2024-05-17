import { getDateFromTimestamp } from "@/utils/getDateFromTimestamp";
import InfoRow from "./InfoRow";
import Link from "next/link";

interface ResultsProps {
  data: DaDataResponce;
}

const Results = async ({ data }: ResultsProps) => {
  return (
    <div className="flex w-full flex-col gap-6">
      {data.suggestions.map((party) => (
        <div
          key={party.data.kpp}
          className="flex w-full flex-col gap-2 rounded bg-slate-100 p-4"
        >
          <h2 className="self-center font-semibold">{party.value}</h2>
          <InfoRow
            label={party.data.management?.post}
            info={party.data.management?.name}
          />
          <InfoRow label={"КПП"} info={party.data.kpp} />
          <InfoRow label={"ИНН"} info={party.data.inn} />
          <InfoRow label={"ОГРН"} info={party.data.ogrn} />
          <InfoRow label={"ОКПО"} info={party.data.okpo} />
          <InfoRow label={"ОКАТО"} info={party.data.okato} />
          <InfoRow label={"ОКТМО"} info={party.data.oktmo} />
          <InfoRow label={"ОКОГУ"} info={party.data.okogu} />
          <div className="flex gap-2 ">
            <span className="font-light italic">Год регистрации:</span>
            {party.data.state.registration_date ? (
              getDateFromTimestamp(party.data.state.registration_date)
            ) : (
              <span>-</span>
            )}
          </div>
          <Link
            replace
            href={`?address=${encodeURIComponent(party.data.address.value)}`}
            className="flex gap-2 "
          >
            <span className="font-light italic">Юридический адрес:</span>
            <span className="underline underline-offset-2 transition-colors hover:text-blue-900">
              {party.data.address.value}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Results;
