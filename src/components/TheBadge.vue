<template>
  <div class="badge" :style="badge?.position + 'background-color: ' + badge?.backgroundColor">
    {{ badge?.label }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BADGES } from '@/enums';

type BadgeProperties = {
  backgroundColor: string;
  position: string;
  label: string;
};

@Component({})
export default class TheBadge extends Vue {
  @Prop({ type: String })
  type!: string;

  private theBadgeMap = new Map<string, BadgeProperties>([
    [
      BADGES.TOP,
      { backgroundColor: '#71C396', position: 'left: 4px; top: 4px;', label: BADGES.TOP },
    ],
    [
      BADGES.SALE,
      {
        backgroundColor: '#E69349',
        position: 'left: 50%; transform: translate(-50%, -50%); top: 16px;',
        label: BADGES.SALE,
      },
    ],
    [
      BADGES.POPULAR,
      { backgroundColor: '#9B5DE2', position: 'bottom: 10px; right: 10px;', label: BADGES.POPULAR },
    ],
  ]);

  get badge(): BadgeProperties | undefined {
    return this.theBadgeMap.get(this.type);
  }
}
</script>
<style scoped lang="less">
.badge {
  position: absolute;
  width: fit-content;
  padding: 0 16px;
  height: 23px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
