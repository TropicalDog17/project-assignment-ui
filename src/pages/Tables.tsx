import { useCallback, useEffect, useRef } from 'react';
import papa from "papaparse";
import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';
import TableThree from '../components/TableThree';
import TableTwo from '../components/TableTwo';

const Tables = () => {

  // const csvFileReaderRef = useRef<FileReader>(new FileReader());

  // useEffect(() => {
  //   csvFileReaderRef.current.onload = async ({ target, }) => {
  //     if(target && target.result) {
  //       const content = papa.parse(target., {
  //         header: true,
  //       });
  //     }
  //   }
  // }, [])

  const onCsvDataParsed: papa.ParseLocalConfig<any, File>['complete'] = useCallback((results: papa.ParseResult<any>) => {
    console.log(results);
  }, [])

  const onCsvFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files.length > 0) {
      papa.parse<any, File>(e.target.files[0], {
        header: true,
        complete: onCsvDataParsed
      })
    }
  }, [onCsvDataParsed])

  return (
    <>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Upload CSV file here
            </label>
            <input
              type="file"
              onChange={onCsvFileChange}
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
              Constraints
            </h4>

            {/* Add some inputs */}
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Số lượng giáo viên tối thiểu trong hội đồng
              </label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Số lượng giáo viên tối đa
              </label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="200"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Yêu cầu trình độ chuyên môn
              </label>
              <input
                type="text"
                placeholder="Siêu cấp vip pro"
                min="1"
                max="200"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Độ phù hơp với đề tài
              </label>
              <input
                type="text"
                placeholder="Không thể phù hợp hơn"
                min="1"
                max="200"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-6">
        <TableOne />
        {/* <TableTwo />
        <TableThree /> */}
      </div>
    </>
  );
};

export default Tables;
