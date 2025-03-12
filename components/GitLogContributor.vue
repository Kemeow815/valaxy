<script setup lang="ts">
import { useGitLog } from 'valaxy-addon-git-log'

const gitLog = useGitLog()
</script>

<template>
            <ul>
                <li v-for="contributor in gitLog.contributors" :key="contributor.email">
                    <img :src="contributor.avatar" alt="Avatar" width="30" height="30">
                    {{ contributor.name }}
                </li>
            </ul>
        <GitLogContributor />
</template>