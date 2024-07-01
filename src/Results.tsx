"use client";
import "./Results.css";
import { columns } from "./components/patients/columns";
import { DataTable } from "./components/patients/DataTable";
import { DataTable2 } from "./components/patients/DataTable2";
import ExpandableComponent from "./components/ExpandableComponent";

enum Quality {
  High = "high ↑",
  Medium = "medium →",
  Low = "low ↓",
}

// The numbering represents the order the events are expected to occur,
// First is the baseline, then the follow-up, and finally the conclusion.
// All events may not be present, but when they are, the earlier event will always be present.
enum Event {
  Baseline = "Baseline",
  FollowUp = "FollowUp",
  Conclusion = "Conclusion",
}

interface Result {
  patientId: string; // the client-specific identifier
  scannedAt: Date; // the time at which the sample was digitally scanned
  score: number; // the score of the sample
  event: Event; // the event that the sample was taken at
  sampleQuality: Quality; // the quality of the sample
  dateOfBirth: string; // the date of birth of the patient
}

// please do not edit the data, unless to add further examples
const data: Result[] = [
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-03T12:00:00Z"),
    score: 0.81,
    event: Event.FollowUp,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-01T12:00:00Z"),
    score: 0.92,
    event: Event.Baseline,
    sampleQuality: Quality.High,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-08T12:00:00Z"),
    score: 0.43,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "js27h",
    scannedAt: new Date("2021-08-02T12:00:00Z"),
    score: 0.74,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1993-02-12",
  },
  {
    patientId: "js27h",
    scannedAt: new Date("2021-08-09T12:00:00Z"),
    score: 0.65,
    event: Event.FollowUp,
    sampleQuality: Quality.High,
    dateOfBirth: "1993-02-12",
  },
  {
    patientId: "js27h",
    scannedAt: new Date("2021-08-16T12:00:00Z"),
    score: 0.89,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1993-02-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-03T12:00:00Z"),
    score: 0.25,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1981-04-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-21T12:00:00Z"),
    score: 0.21,
    event: Event.FollowUp,
    sampleQuality: Quality.High,
    dateOfBirth: "1981-04-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-28T12:00:00Z"),
    score: 0.37,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1981-04-12",
  },
  {
    patientId: "a93kd",
    scannedAt: new Date("2021-08-04T12:00:00Z"),
    score: 0.5,
    event: Event.Baseline,
    sampleQuality: Quality.High,
    dateOfBirth: "1987-05-23",
  },
  {
    patientId: "a93kd",
    scannedAt: new Date("2021-08-11T12:00:00Z"),
    score: 0.63,
    event: Event.FollowUp,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1987-05-23",
  },
  {
    patientId: "a93kd",
    scannedAt: new Date("2021-08-18T12:00:00Z"),
    score: 0.75,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1987-05-23",
  },
  {
    patientId: "b42mk",
    scannedAt: new Date("2021-08-05T12:00:00Z"),
    score: 0.91,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1995-11-15",
  },
  {
    patientId: "b42mk",
    scannedAt: new Date("2021-08-12T12:00:00Z"),
    score: 0.84,
    event: Event.FollowUp,
    sampleQuality: Quality.High,
    dateOfBirth: "1995-11-15",
  },
  {
    patientId: "b42mk",
    scannedAt: new Date("2021-08-19T12:00:00Z"),
    score: 0.73,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1995-11-15",
  },
  {
    patientId: "c87xl",
    scannedAt: new Date("2021-08-06T12:00:00Z"),
    score: 0.49,
    event: Event.Baseline,
    sampleQuality: Quality.High,
    dateOfBirth: "1982-07-21",
  },
  {
    patientId: "c87xl",
    scannedAt: new Date("2021-08-13T12:00:00Z"),
    score: 0.67,
    event: Event.FollowUp,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1982-07-21",
  },
  {
    patientId: "c87xl",
    scannedAt: new Date("2021-08-20T12:00:00Z"),
    score: 0.76,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1982-07-21",
  },
  {
    patientId: "d65wj",
    scannedAt: new Date("2021-08-07T12:00:00Z"),
    score: 0.3,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1979-09-30",
  },
  {
    patientId: "d65wj",
    scannedAt: new Date("2021-08-14T12:00:00Z"),
    score: 0.44,
    event: Event.FollowUp,
    sampleQuality: Quality.High,
    dateOfBirth: "1979-09-30",
  },
  {
    patientId: "d65wj",
    scannedAt: new Date("2021-08-21T12:00:00Z"),
    score: 0.59,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1979-09-30",
  },
  {
    patientId: "e19zp",
    scannedAt: new Date("2021-08-08T12:00:00Z"),
    score: 0.34,
    event: Event.Baseline,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-12-05",
  },
  {
    patientId: "e19zp",
    scannedAt: new Date("2021-08-15T12:00:00Z"),
    score: 0.52,
    event: Event.FollowUp,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1990-12-05",
  },
  {
    patientId: "e19zp",
    scannedAt: new Date("2021-08-22T12:00:00Z"),
    score: 0.68,
    event: Event.Conclusion,
    sampleQuality: Quality.High,
    dateOfBirth: "1990-12-05",
  },
];

const groupByPatientId = (data: Result[]): Result[][] => {
  const grouped = data.reduce((acc: { [key: string]: Result[] }, item) => {
    if (!acc[item.patientId]) {
      acc[item.patientId] = [];
    }
    acc[item.patientId].push(item);
    return acc;
  }, {});

  return Object.values(grouped);
};

const groupedData = groupByPatientId(data);

export default function Results() {
  return (
    <div>
      <div className="max-w-3xl m-4 mx-auto">
        <h1 className="text-2xl font-semibold ">Dashboard 1</h1>
        <DataTable columns={columns} data={data} />
        <h1 className="text-2xl font-semibold ">Dashboard 2</h1>
        <div className="grid gap-3 my-4">
          {groupedData.map((group, index) => {
            return (
              <ExpandableComponent>
                <DataTable2
                  key={index}
                  columns={columns}
                  data={group}
                ></DataTable2>
              </ExpandableComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
}
