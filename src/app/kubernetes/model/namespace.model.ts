import {KubernetesResource} from './kuberentes.model';

export class Namespace extends KubernetesResource {
  environments: Array<any>;

  defaultKind() {
    return 'Namespace';
  }


  defaultIconUrl(): string {
    return "";
  }
}

export class Namespaces extends Array<Namespace>{
}
