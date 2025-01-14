import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import OperationsCard from "./OperationsCard";

const OngoingOperations = ({ setSelectedOperation }: any) => {
  const data = [
    {
      operationId: 3633392,
      offerId: 4633522,
      date: {
        startDate: "2025-01-07T21:00:00.000Z",
        endDate: "2025-01-10T23:59:59.999Z",
      },
      newOperations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi.",
      ],
      operationImages: ["asdsa"],
      additional: { peopleCount: 1, layover: true },
      status: "confirmed",
      operationPrice: 18000,
      operationDoctor: "Prof. Dr. Erkan Vural",
      sleepTime: 3,
      hospital: "Amerikan Hastanesi",
      preOperativeRequests:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      operationDetails:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
    {
      operationId: 3633393,
      offerId: 4633523,
      date: {
        startDate: "2025-01-07T21:00:00.000Z",
        endDate: "2025-01-10T23:59:59.999Z",
      },
      newOperations: ["Deviasyon (Septum Eğriliği) Ameliyatı"],
      operationImages: ["asdsa"],
      additional: { peopleCount: 1, layover: true },
      status: "confirmed",
      operationPrice: 18000,
      operationDoctor: "Prof. Dr. Erkan Vural",
      sleepTime: 3,
      hospital: "Amerikan Hastanesi",
      preOperativeRequests:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      operationDetails:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },

    {
      operationId: 3633394,
      offerId: 4633524,
      date: {
        startDate: "2025-01-07T21:00:00.000Z",
        endDate: "2025-01-10T23:59:59.999Z",
      },
      newOperations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi.",
      ],
      operationImages: ["asdsa"],
      additional: { peopleCount: 1, layover: true },
      status: "confirmed",
      operationPrice: 18000,
      operationDoctor: "Prof. Dr. Erkan Vural",
      sleepTime: 3,
      hospital: "Amerikan Hastanesi",
      preOperativeRequests:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      operationDetails:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },

    {
      operationId: 3633395,
      offerId: 4633525,
      date: {
        startDate: "2025-01-07T21:00:00.000Z",
        endDate: "2025-01-10T23:59:59.999Z",
      },
      newOperations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi.",
      ],
      operationImages: ["asdsa"],
      additional: { peopleCount: 1, layover: true },
      status: "confirmed",
      operationPrice: 18000,
      operationDoctor: "Prof. Dr. Erkan Vural",
      sleepTime: 3,
      hospital: "Amerikan Hastanesi",
      preOperativeRequests:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      operationDetails:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },

    {
      operationId: 3633396,
      offerId: 4633526,
      date: {
        startDate: "2025-01-07T21:00:00.000Z",
        endDate: "2025-01-10T23:59:59.999Z",
      },
      newOperations: [
        "Deviasyon (Septum Eğriliği) Ameliyatı",
        "Revizyon Burun Cerrahisi.",
      ],
      operationImages: ["asdsa"],
      additional: { peopleCount: 1, layover: true },
      status: "confirmed",
      operationPrice: 18000,
      operationDoctor: "Prof. Dr. Erkan Vural",
      sleepTime: 3,
      hospital: "Amerikan Hastanesi",
      preOperativeRequests:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      operationDetails:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <View className="px-4 pb-64">
      <FlatList
        data={data}
        keyExtractor={(item) => item.operationId.toString()}
        renderItem={({ item }) => (
          <OperationsCard item={item} onSelect={setSelectedOperation} />
        )}
      />
    </View>
  );
};

export default OngoingOperations;
