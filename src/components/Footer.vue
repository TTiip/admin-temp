<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button icon-btn @click="toggleDark()">
      <div dark:i-iconoir-half-moon i-iconoir:sun-light />
    </button>

    <a
      icon-btn i-iconoir:github
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
