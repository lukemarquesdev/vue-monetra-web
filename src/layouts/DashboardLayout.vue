<template>
  <div class="flex h-screen">

    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white">
      Sidebar
    </aside>

    <div class="flex-1 flex flex-col">

      <!-- Navbar -->
      <header class="h-16 shadow px-4 flex items-center">
        Navbar
      </header>

      <!-- Conteúdo -->
      <main class="flex-1 p-6 bg-gray-100">
        <router-view />
      </main>

    </div>
  </div>
</template>
