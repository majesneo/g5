<template>
  <div class="description-feature">
    <div class="feature-name">
      <span class="description-label"> Brand:</span><span class="feature-value">{{ brand }}</span>
    </div>
    <div class="feature-name">
      <span class="description-label"> Category:</span
      ><span class="feature-value">{{ category }}</span>
    </div>
    <div class="feature-name">
      <div class="description-block">
        <span class="description-label">Description:</span><span class="description">{{ descriptionStyle }}</span>
      </div>
    </div>
    <div class="feature-name">
      <span class="description-label">In stoke:</span>
      <span class="feature-value">{{ stock }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BaseIcon from '@/components/BaseIcon.vue';

@Component({
  components: { BaseIcon },
})
export default class ProductDescription extends Vue {
  @Prop({ type: String })
  brand!: string;

  @Prop({ type: String })
  category!: string;

  @Prop({ type: String })
  description!: string;

  @Prop({ type: Number })
  discountPercentage!: number;

  @Prop({ type: Number })
  rating!: number;

  @Prop({ type: Number })
  stock!: number;

  @Prop({ type: String })
  title!: string;

  get descriptionStyle() {
    if (this.description.length > 53) {
      return `${this.description.slice(0, 53)}...`;
    }
    return this.description;
  }
}
</script>
<style>
.feature-name {
  margin: 8px 0;
}
.description {
  font-weight: normal;
}
.description-block{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.description-label {
  font-weight: bold;
  margin-right: 5px;
}

.description-feature {
  width: 100%;
}
.feature-value {
  font-size: 16px;
  color: #111111;
  font-weight: 400;
}
@media (max-width: 375px) {
  .description-block {
    -webkit-line-clamp: 1;
  }
  .feature-name{
    margin: 4px 0;
  }
}
</style>
