<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getStudents } from "@/services/StudentService";
import { StudentsEntities } from "@/types/StudentsEntities";

const students = ref<StudentsEntities[]>([]);
const loading = ref(false);

const fetchStudents = async () => {
  loading.value = true;
  students.value = await getStudents();
  loading.value = false;
};

onMounted(fetchStudents);
</script>

<template>
  <div class=" ">
    <h1 class="flex justify-center p-4 text-2xl">Student List</h1>
    <div v-if="loading" class="flex items-center justify-center rounded-lg">
      <div
        class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"
      >
        Loading Students...
      </div>
    </div>
    <div class="flex justify-center relative overflow-x-auto mt-10">
      <table
        class="w-[980px] text-sm text-gray-500 dark:text-gray-400 sm:rounded-lg"
      >
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">First Name</th>
            <th scope="col" class="px-6 py-3">Last Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b hover:bg-gray-50"
            v-for="student in students"
            :key="student.id"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ student.first_name }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ student.last_name }}
            </th>
            <td class="px-6 py-4 text-center">{{ student.email }}</td>
            <td class="px-6 py-4 text-center">{{ student.age }}</td>
          </tr>
          <tr v-if="loading" class="bg-white border-b animate-pulse">
            <td class="px-6 py-4">
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5 m-auto"
              ></div>
            </td>
            <td class="px-6 py-4">
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5 m-auto"
              ></div>
            </td>
            <td class="px-6 py-4">
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-40 mb-2.5 m-auto"
              ></div>
            </td>
            <td class="px-6 py-4">
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 m-auto"
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
