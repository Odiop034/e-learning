import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";
import SubHeading from "./SubHeading";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function CourseList({ courseLevel }) {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(courseLevel).then((resp) => {
      console.log("RESP--", resp);
      setCourseList(resp?.courses);
    });
  };

  return (
    <View>
      <SubHeading text={courseLevel+" Courses "} />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              backgroundColor: Colors.WHITE,
              marginRight: 15,
              borderRadius: 15,
            }}
          >
            <Image
              source={{ uri: item?.banner.url }}
              style={{ width: 210, height: 120, borderRadius: 15 }}
            />
            <View style={{ padding: 7 }}>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 17,
                }}
              >
                {item.name}
              </Text>
              <View style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 5,
                  }}
                >
                  <Ionicons name="book-outline" size={18} color="black" />
                  <Text style={{fontFamily:'outfit'}}>{item?.chapters?.length} Chapitres </Text>
                </View>
                  <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        marginTop: 5,
                  }}
                  >
                    <Ionicons name="time-outline" size={18} color="black" />
                    <Text style={{fontFamily:'outfit'}}>{item?.time} </Text>
                  </View>
                </View>
                <Text style={{marginTop:5,
                  color:Colors.PRIMARY,
                  fontFamily:'outfit-medium'
                }}>{item.price==0?'Gratuit':item.price}</Text>
              </View>
            </View>
          
        )}
      />
    </View>
  );
}