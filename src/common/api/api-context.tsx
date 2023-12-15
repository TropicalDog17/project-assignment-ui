import React from 'react';

export interface IThesisInfo {
  thesisName: string;
  studentName: string;
  similarity: number;
}

export interface IAssignment {
  [teacherName: string]:  IThesisInfo[];
}

export interface ISolution {
  assignment: IAssignment;
  score: number;
}

const mockData: ISolution[] = [
  {
    assignment: {
      "Trần Đình Khang": [
        {
          thesisName: "Đề tài 1",
          studentName: "Nguyễn Văn A",
          similarity: 0.8,
        },
        {
          thesisName: "Đề tài 2",
          studentName: "Nguyễn Văn A",
          similarity: 0.4,
        },
      ],
      "Nguyễn Thị Kim Anh": [{
        thesisName: "Đề tài 2",
        studentName: "Nguyễn Văn B",
        similarity: 0.8,
      }],
    },
    score: 30
  },
  {
    assignment: {
      "Trần Đình Khang": [
        {
          thesisName: "Đề tài 2",
          studentName: "Nguyễn Văn A",
          similarity: 0.3,
        },
        {
          thesisName: "Đề tài 4",
          studentName: "Nguyễn Văn A",
          similarity: 0.2,
        },
      ],
      "Nguyễn Thị Kim Anh": [{
        thesisName: "Đề tài 1",
        studentName: "Nguyễn Văn B",
        similarity: 0.5,
      }],
    },
    score: 10
  }
];


export const ApiContext = React.createContext<ISolution[]>([])

export interface IApiProviderProps {
  children: React.ReactNode;
}

export const ApiProvider = ({ children }: IApiProviderProps) => {
  return <ApiContext.Provider
    value={mockData}
  >{children}</ApiContext.Provider>
}